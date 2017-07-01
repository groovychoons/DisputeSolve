import { Options } from './options';

export const INITIAL: Options[] = [
	{option: 'Do you want to take legal action?   →', route: ''},
	{option: 'Do you want to respond to a legal document?   →', route: ''}
];

export const SECONDARY: Options[] = [
	{option: 'Who?', route: 'who'},
	{option: 'What?', route: ''},
	{option: 'When?', route: ''},
	{option: 'Where?', route: ''},
	{option: 'Why?', route: ''},
	{option: 'Start again', route: ''},
];

