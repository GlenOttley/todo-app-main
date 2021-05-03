import { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		transition: all 0.25s linear;
	}

	body {
		background: ${({ theme }) => theme.body};
		margin: 0;
	}

	.entry-box__input {
		background: ${({ theme }) => theme.entryBoxInput__background};
		color: ${({ theme }) => theme.entryBoxInput__color};
	}

	.to-dos {
		border-radius: ${({ theme }) => theme.toDos__borderRadius};
	}
	.to-do-item {
		background: ${({ theme }) => theme.toDoItem__background};
		border-bottom: ${({ theme }) => theme.toDoItem__borderBottom};
	}
	.to-do-item__description {
		color: ${({ theme }) => theme.toDoItemDescription__color};
	}
	.to-do-item__description--complete {
		color: color: ${({ theme }) => theme.toDoItemDescriptionComplete__color};
	}
	.checkbox {
		border: ${({ theme }) => theme.checkbox__border};
	} 

	.to-do-counter {
		background: ${({ theme }) => theme.toDoCounter__background};
		color: ${({ theme }) => theme.toDoCounter__color};
	}

	.to-do-filter {
		background: ${({ theme }) => theme.toDoFilter__background};
	}
	.to-do-filter__items {
		color: ${({ theme }) => theme.toDoFilterItems__color};
	}

	`