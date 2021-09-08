import React,{ Component } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import './index.css'

export default class App extends Component {

    state = {
        show: true
    }

    render () {
        return (

            <CSSTransition
                in={this.state.show}
                classNames='show'
                timeout={300}
                unmountOnExit>
                {state => {
                    if(state==='exited'){
                      console.log(1,state)
                    }
                    return (
                        <div className='circle' onClick={()=>setTimeout(()=>{
                          this.setState(state=>({show: !state.show}))
                        }, 2000)}> 
                                <div class="rotate-wrap">
                                <div class="front circle"></div>
                            </div>

                        </div>
                    )
                }}
            </CSSTransition>
        )
    }
}