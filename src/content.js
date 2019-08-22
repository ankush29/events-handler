import React, { Component } from 'react';

export default class content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: []
    }
  }

  componentDidMount () {
    this._handleTab(null, 0)
  }

  _handleTab = (ev, defaultId) => {
    const { openTab } = this.state;
    let openTabcopy = openTab.slice();
    let openTabWidthCopy = null;
    let currenId = defaultId === 0 ? defaultId : Array.prototype.indexOf.call(ev.currentTarget.childNodes, ev.target)
    let filterLength =  openTabcopy.filter(x => x.id === currenId).length
    let totalWidth = openTabcopy.length * 15;
    let innerText = defaultId === 0 ? 'Event Type 1' : ev.target.innerText;
    if(totalWidth > 75) {
      openTabWidthCopy = 100/(openTabcopy.length+1);
      openTabWidthCopy = openTabWidthCopy+'%'
      openTabcopy.forEach((item) => {
        item.width = openTabWidthCopy;
      })
    } else {
      openTabWidthCopy = '15%'
    }
    openTabcopy.forEach((item) => {
      item.isActive = false;
    })
    if(!filterLength) {
      let openTabData = {
        id: currenId,
        value: innerText,
        width: openTabWidthCopy,
        isActive: true
      }
      openTabcopy.push(openTabData)

      this.setState({
        openTab: openTabcopy
      })
    }

  }

  _addActive = (item, ev, type) => {
    const { openTab } = this.state
    let openTabcopy = openTab.slice();
    console.log('this',this);
    openTabcopy.forEach((ele) => {
      if(ele.id === item.id) {
        ele.isActive = true
      } else {
        ele.isActive = false
      }
    })
    if(type) {
      this.setState({
        openTab: openTabcopy
      })
    }

  }

  _removeCurrentItem = (item, ev) => {
    ev.stopPropagation();
    const { openTab } = this.state;
    let openTabWidthCopy = null;
    let openTabcopy = openTab.filter((ele) => {
      if(ele.id !== item.id) {
        return ele;
      } else {
        return false
      }
    })
    let totalWidth = openTabcopy.length * 15
    if(totalWidth > 75) {
      openTabWidthCopy = 100/(openTabcopy.length+1);
      openTabWidthCopy = openTabWidthCopy+'%'
      openTabcopy.forEach((item) => {
        item.width = openTabWidthCopy;
      })
    } else {
      openTabcopy.forEach((item) => {
        item.width = '15%';
      })
    }
    this.setState({
      openTab: openTabcopy
    })
    if(openTabcopy.length)
      this._addActive(openTabcopy[openTabcopy.length-1],null,false)
  }

  render () {
    const { openTab } = this.state
    console.log('openTab---',openTab);
    return (
      <div className='container'>
        <nav>
          <ul onClick={(ev) => this._handleTab(ev)}>
            <li>Events Type 1</li>
            <li>Events Type 2</li>
            <li>Events Type 3</li>
            <li>Events Type 4</li>
            <li>Events Type 5</li>
            <li>Events Type 6</li>
            <li>Events Type 7</li>
            <li>Events Type 8</li>
            <li>Events Type 9</li>
            <li>Events Type 10</li>
            <li>Events Type 11</li>
            <li>Events Type 13</li>
            <li>Events Type 14</li>
            <li>Events Type 15</li>
            <li>Events Type 16</li>
            <li>Events Type 17</li>
            <li>Events Type 18</li>
            <li>Events Type 19</li>
            <li>Events Type 20</li>
          </ul>
        </nav>
        <div className='tab-content'>
          <div className="tabs">
            {openTab.map((item) => {
              return (
                <div className={item.isActive ? ' active tab' : 'tab'} key={item.id} style={{width: item.width}} onClick={(ev) => this._addActive(item,ev,true)}>
                  <div className="tab-box">
                    <p>{item.value}</p>
                    <div className="overlay">
                      <span href="#" className="icon">
                        <i onClick={(ev) => this._removeCurrentItem(item,ev)}>x</i>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
