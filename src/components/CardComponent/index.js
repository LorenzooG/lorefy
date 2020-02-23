import React, { useRef, useContext } from 'react';

import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/Context';

import { Container, Label } from './styles';

export default function CardComponent({ data, index, listIndex }) {
	const ref = useRef();
	const { move } = useContext(BoardContext);

	const [{ isDragging }, dragRef] = useDrag({
		item: {
			type: 'CARD',
			id: data.id,
			index,
			listIndex,
			content: data.content,
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, dropRef] = useDrop({
		accept: 'CARD',
		hover(item, monitor) {
			const draggedList = item.listIndex;
			const draggedIndex = item.index;
			const targetIndex = index;
			const targetList = listIndex;

			if (draggedIndex === targetIndex && targetList === draggedList) {
				return;
			}

			const targetSize = ref.current.getBoundingClientRect();
			const targetCenter = (targetSize.bottom - targetSize.top) / 2;

			const draggedOffset = monitor.getClientOffset();
			const draggedTop = draggedOffset.y - targetSize.top;

			if (
				!(draggedIndex < targetIndex && draggedTop < targetCenter) &&
				!(draggedIndex > targetIndex && draggedTop > targetCenter)
			) {
				move(draggedList, targetList, draggedIndex, targetIndex);

				item.index = targetIndex;
				item.listIndex = targetList;
			}
		},
	});

	dragRef(dropRef(ref));

	return (
		<Container isDragging={isDragging} ref={ref}>
			<header>
				{data.labels.map(label => (
					<Label color={label} key={label} />
				))}
			</header>
			<p>{data.content}</p>
			{data.user && <img src={data.user} alt="Avatar" />}
		</Container>
	);
}
