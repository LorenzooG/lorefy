import React, { useState } from 'react';

import produce from 'immer';

import { loadLists } from '../../services/api';

import { Container } from './styles';
import CardList from '../CardList';
import Context from './Context';

const data = loadLists();

export default function Board() {
	const [lists, setLists] = useState(data);

	function move(fromList, toList, from, to) {
		setLists(
			produce(lists, draft => {
				const dragged = draft[fromList].cards[from];

				draft[fromList].cards.splice(from, 1);

				draft[toList].cards.splice(to, 0, dragged);
			})
		);
	}

	return (
		<Context.Provider value={{ lists, move }}>
			<Container>
				{lists.map((list, index) => (
					<CardList key={list.title} index={index} data={list} />
				))}
			</Container>
		</Context.Provider>
	);
}
