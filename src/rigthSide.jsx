import React, { useEffect } from 'react';
import './rightSide.css';

function RightSide()
{
    let listMarginTop = 70;
    let listMarginLeft = 40;
    useEffect(() => 
    {
        let list = document.getElementById('firstLine');
        let lists = document.getElementsByTagName('li');
        let listsArr = [...lists];
        let z = 10;
        let transDelay = 1;
        let xBtn = document.getElementsByClassName('xBtn');
        let xBtnArr = [...xBtn];
        
        listsArr[0].style.marginTop = listMarginTop + 'vh';
        listsArr[0].style.marginLeft = listMarginLeft + 'vw';
        for(let i = 0; i < listsArr.length; i++)
        {
            listsArr[i].style.transition = 'all 0.5s linear ' + transDelay + 's';
            transDelay -= 0.1;
            listsArr[i].style.zIndex = z;
            z--;
            listsArr[i].style.marginTop = listMarginTop + 'vh';
            listsArr[i].style.marginLeft = listMarginLeft + 'vw';
            listMarginTop -= 6;
            listMarginLeft -= 6;
        }
        let lastChildMarginTop = 12;
        let lastChildMarginLeft = -20;


        list.onclick = function(event)
        {
            let targetBtn = event.target;
            if (targetBtn.tagName != 'BUTTON') return;
            console.log(targetBtn);
            if (targetBtn.className == 'xBtn')
            {
            let copyWindow  = targetBtn.parentElement.parentElement.cloneNode(true);
                targetBtn.parentElement.parentElement.style.opacity = '0';
                copyWindow.style.marginTop = parseInt(list.lastChild.style.marginTop) - 6 + 'vh';
                copyWindow.style.marginLeft = parseInt(list.lastChild.style.marginLeft) - 6 + 'vw';
                copyWindow.style.zIndex = z;
                z--;
                lastChildMarginTop -= 6;
                lastChildMarginLeft -= 6;
                list.appendChild(copyWindow);
                let listChildArr = [...list.childNodes];
                listChildArr.forEach(win => {
                    win.style.marginTop = parseInt(win.style.marginTop) + 6 + 'vh';
                    win.style.marginLeft = parseInt(win.style.marginLeft) + 6 + 'vw';
                });
            }
            else if (targetBtn.className == 'previousBtn')
            {
                if (targetBtn.parentElement.parentElement.previousSibling)
                {
                    list.removeChild(list.lastChild);
                    targetBtn.parentElement.parentElement.previousSibling.style.opacity = '1';
                    let listChildArr = [...list.childNodes];
                    listChildArr.forEach(win => {
                    win.style.marginTop = parseInt(win.style.marginTop) - 6 + 'vh';
                    win.style.marginLeft = parseInt(win.style.marginLeft) - 6 + 'vw';
                });
                }
            }
        }
    });

    return (
        <div id='rightMain' className='rightMain'>
            <div id="container">
                <ul id='firstLine'>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                    <li>
                        <div className='showWindow'>
                            <button className='xBtn'></button>
                            <button className ='previousBtn'></button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RightSide;