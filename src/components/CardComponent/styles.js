import styled, { css } from 'styled-components';

export const Container = styled.div`
	position: relative;
	background: #fff;
	border-radius: 5px;
	padding: 5px;
	margin-bottom: 15px;

	box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
	border-top: 20px solid rgba(230, 236, 245, 0.4);

	cursor: grab;

	p {
		font-weight: 500;
		line-height: 20px;
	}

	header {
		position: absolute;
		top: -22px;
		left: 15px;
	}

	img {
		width: 25px;
		height: 25px;
		border-radius: 2px;
		margin-top: 2px;
	}

	${props =>
		props.isDragging &&
		css`
			border: 2px dashed rgba(0, 0, 0, 0.2);
			padding-top: 32px;
			background: transparent;
			box-shadow: none;
			cursor: grabbing;

			p,
			img,
			header {
				opacity: 0;
			}
		`}
`;
export const Label = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 2px;
	display: inline-block;
	background: ${props => props.color};
`;
