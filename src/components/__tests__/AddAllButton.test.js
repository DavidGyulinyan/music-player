import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import AddAllButton from '../AddAllButton/AddAllButton'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../redux/store'

describe('AddAllButton', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer, applyMiddleware());
    });

    it('dispatches addAllSongs action when button is clicked', () => {
        render(
            <Provider store={store}>
                <AddAllButton />
            </Provider>
        );

        const addButton = screen.getByText('Add all');
        fireEvent.click(addButton);
    });
});
