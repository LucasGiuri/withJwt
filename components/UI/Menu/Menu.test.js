import Menu from './Menu';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

jest.mock('../NavLink/NavLink', () => 'NavLink');
jest.mock('@material-ui/icons/Dashboard', () => 'Dashboard');
jest.mock('@material-ui/icons/Home', () => 'Home');
jest.mock('@material-ui/core/ListItemText', () => 'ListItemText');
jest.mock('@material-ui/core/ListItemIcon', () => 'ListItemIcon');
jest.mock('@material-ui/core/ListItem', () => 'ListItem');
jest.mock('@material-ui/core/List', () => 'List');

describe('Menu', () => {
  const links = [
    {id: 1, page: "/", text: "Home"},
    {id: 2, page: "/dashboard", text: "Dashboard"},
  ];

	it('Menu basic render snapshoot', () => {
		const component = renderer.create(<Menu links={links} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})