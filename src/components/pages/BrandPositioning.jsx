

import './styles/BrandPositioning.css'
import Inner from '../Inner'
import PageTitle from '../PageTitle'


const BrandPositioning = (props) =>{

    return (
            <Inner className='page_2 page' currentPage = {props.currentPage} onPageChange={props.onPageChange}>
                <PageTitle upperText = 'Brand' lowerText='Positioning'/>
            </Inner>
    )
}

export default BrandPositioning;