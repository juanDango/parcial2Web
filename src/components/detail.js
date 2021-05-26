import React from 'react'
import { FormattedMessage } from 'react-intl'

function detail (props){
    console.log(navigator.onLine)
    if(props.selected.id){
        return(
            <div className="card">
                {!navigator.onLine?(<p><FormattedMessage id='error'/></p>):<img src={props.selected.poster} className="card-img-top" alt={'poster de la serie ' + props.selected.name}/>}
                <div className="card-body">
                    <h5 className="card-title">{props.selected.name}</h5>
                    <p className="card-text">{props.selected.description}</p>
                    <a href={props.selected.webpage}>{props.selected.webpage}</a>
                </div>
            </div>
        )
    }else{
        return(
            <div>

            </div>
        )
    }
}

export default detail;