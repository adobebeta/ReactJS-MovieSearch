import React, { Component } from 'react'

 class MovieItem extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const {poster_src,title,overview} = this.props.movie

        return (
            <div>
                <table style={{textAlign:"left"}}>
                    <tbody>
                        <tr>
                            <td>
                                <img src= {this.props.movie.poster_src} />
                            </td>

                            <td>
                                <strong> {this.props.movie.title} </strong>
                            </td>
                            <td>
                                {this.props.movie.overview}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MovieItem;
