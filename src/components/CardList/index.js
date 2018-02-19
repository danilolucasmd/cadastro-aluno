import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { addCard, changeField } from 'actions';
import Card from './Card';
import PlusButton from './PlusButton';
import styles from './styles.css';

class App extends Component {
    render() {
        return (
            <Container className={styles.component}>
                <Row noGutters={true}>
                    {this.props.cards.map((card, key) =>
                        <Col key={key} index={key} xs='6'>
                            <Card
                                card={card}
                                onChange={(field, value) => this.props.onChange(field, value, key)}
                            />
                        </Col>
                    )}
                    <PlusButton onClick={() => this.props.addCard()} />
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    cards: state.cards,
});

const mapDispatchToProps = dispatch => ({
    addCard() {
        dispatch(addCard());
    },
    onChange(field, value, index) {
        dispatch(changeField(field, value, index));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
