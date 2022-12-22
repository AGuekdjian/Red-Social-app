import React from "react"
import { Link } from "react-router-dom"
import { Container, Grid, Image } from "semantic-ui-react"
import Logo from "../../assets/img/logo.png"
import RightHeader from './RightHeader'
import "./Header.scss"

export default function Header() {
    return (
        <div className="header">
            <Container>
                <Grid>
                    <Grid.Column width={3} className="header__logo">
                        <Link to="/">
                            <Image src={Logo} alt="Logo AG" />
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <p>Buscador</p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <RightHeader />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
