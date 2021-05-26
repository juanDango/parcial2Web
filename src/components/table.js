import React from 'react'
import { FormattedDate, FormattedMessage } from 'react-intl'

function tabla(props){
    return(
        <div className="table">
      <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col"><FormattedMessage id="Name"/></th>
                <th scope="col"><FormattedMessage id="Channel"/></th>
                <th scope="col"><FormattedMessage id="Seasons"/></th>
                <th scope="col"><FormattedMessage id="Episodes"/></th>
                <th scope="col"><FormattedMessage id="Release"/></th>
            </tr>
        </thead>
        <tbody>
            {props.series.map(item=>{
                return(
                    <tr id = {item.id} key = {item.id} onClick={props.handleSelection}>
                        <td id ={'id-'+item.id} scope="row">{item.id}</td>
                        <td id ={'nm-'+item.id}>{item.name}</td>
                        <td id ={'db-'+item.id}>{item.channel}</td>
                        <td id ={'ct-'+item.id}>{item.seasons}</td>
                        <td id ={'bd-'+item.id}>{item.episodes}</td>
                        <td id ={'rd-'+item.id}>
                            <FormattedDate
                                year='numeric'
                                month='short'
                                day='numeric'
                                weekday='short'
                            />
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
    )
}

export default tabla;