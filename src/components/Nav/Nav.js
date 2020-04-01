import React, { useState } from 'react';

import Burger from './Burger';
import ClipPath from './ClipPath';

export default function Nav({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: 'relative', width: '100%' }}>
      <Burger open={open} setOpen={setOpen} />
      <ClipPath open={open}>{children}</ClipPath>
    </nav>
  );
}
