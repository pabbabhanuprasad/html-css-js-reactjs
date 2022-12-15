import {Component} from 'react' 
class ClassComponent2 extends Component{
    render(){
        return <table border="1">
        <thead>
            <tr>
                <th colspan="3">Table 2 from ClassComponent2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HTML</td>
                <td>CSS</td>
                <td>React</td>
            </tr>
        </tbody>
    </table>
    }
}
export default ClassComponent2;