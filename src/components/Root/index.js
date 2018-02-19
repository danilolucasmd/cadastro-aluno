import React from 'react';
import { Provider } from 'react-redux';
import CardList from 'components/CardList';

const Root = ({ store }) => (
    <Provider store={store}>
        <CardList />
    </Provider>
);

export default Root;
