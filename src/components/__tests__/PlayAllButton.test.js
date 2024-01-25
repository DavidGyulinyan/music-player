import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import PlayAllButton from './PlayAllButton'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../redux/reducers'

describe('PlayAllButton', () => {

    let store;

    beforeEach(() => {
        store = createStore(rootReducer, applyMiddleware());
    });

    it('dispatches playAllSongs action when the button is clicked', () => {
        render(
            <Provider store={store}>
                <PlayAllButton />
            </Provider>
        );

        const playButton = screen.getByText('Play all');
        fireEvent.click(playButton);
    });
});
