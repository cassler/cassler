import React from 'react';

export default function Web() {
  const [simpleMode, setSimpleMode] = React.useState(false);
  return (
    <main className={`
      app
      grid w-screen h-screen fixed bg-red-300
      ${simpleMode && 'simple'}
    `}>
      <nav className="bg-green-500">
        <button className='p-2 border bg-green-50' onClick={() => setSimpleMode(!simpleMode)}>Toggle</button>
      </nav>
      <header className='bg-orange-500'>ORANGE</header>
      <aside className='sidebar bg-white'>WHITE</aside>
      <article className='bg-purple-700 overflow-y-scroll'>
        <div className='min-h-[2000px]'>Main Content</div>
      </article>
    </main>
  );
}
