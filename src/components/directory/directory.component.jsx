import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state ={
            sections:[{
                title:'breakfast',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsum0HasbkGv6i43tMnw-DcRljyUGJ_9N9IYb2T48CJ5l4lZmg',
                id:1
            },
            {
                title:'lunch',
                imageUrl:'https://static.wixstatic.com/media/ac8cf3_481a3324e9de48e5919b086af55f5b8c~mv2_d_2684_1863_s_2.jpg/v1/fill/w_445,h_500,al_c,q_80,usm_0.66_1.00_0.01/Taj%20India%20Roses.webp',
                id:2
            },
            {
                title:'dinner',
                imageUrl:'https://thumbs.dreamstime.com/b/indian-dal-traditional-indian-soup-lentils-indian-dal-food-traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-indian-139348337.jpg',
                id:3
            }
        ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id})=>(
                        <MenuItem key={id } title={title} imageUrl={imageUrl} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;