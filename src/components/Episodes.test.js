import React from 'react'
import { render} from '@testing-library/react'
import Episodes from './Episodes'


test('Renders eposide without errors', ()=> {

    render(<Episodes episodes ={[]} />)
})