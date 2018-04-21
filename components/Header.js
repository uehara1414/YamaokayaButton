import React, { Component } from 'react';
import { Container, Header as nb_Header, Text, Left, Body, Right, Title } from 'native-base';

export default class Header extends React.Component {
    render() {
        return (
            <Container>
                <nb_Header>
                    <Left />
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </nb_Header>
            </Container>
        );
    }
}