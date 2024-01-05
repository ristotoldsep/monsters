import React, { Component } from "react";

import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.length === 0 ? (
                    <p>No monsters found</p>
                ) : (
                    monsters.map((monster) => {
                        return (
                            <Card key={monster.id} monster={monster} />
                        )
                    })
                )}
            </div>
        );
    }
}

export default CardList;
