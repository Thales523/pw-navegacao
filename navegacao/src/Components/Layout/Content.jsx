import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../Views/Contents/Home'
import Conteudo01 from '../../Views/Contents/Conteudo01'
import Conteudo02 from '../../Views/Contents/Conteudo02'
import Conteudo03 from '../../Views/Contents/Conteudo03'
import NaoEncontrado from '../../Views/Contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Conteudo01/:usuario">
                <Conteudo01 />
            </Route>
            <Route path="/Conteudo02">
                <Conteudo02 />
            </Route>
            <Route path="/Conteudo03">
                <Conteudo03 />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content
