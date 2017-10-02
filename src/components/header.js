'use strict';

import React from 'react';
import './header.css';

export default function Header() {

  const rawNavItems = [
    { 
      text: 'What?', 
      href: '#',
      class: 'what'
    },
    { 
      text: '+ New Game',
      href: '#',
      class: 'new'
     }
  ];
  const navItems = rawNavItems.map((item, index) => {
    return (
      <li key={index} class={item.class}>
        <a href={item.href}>{item.text}</a>
      </li>
    );
  });

  return (
    <header>
      <nav>
        <ul class='clearfix'>
          {navItems}
        </ul>
      </nav>
      <h1>HOT or COLD</h1>
    </header>
  );
}