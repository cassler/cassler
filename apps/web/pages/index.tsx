import React from 'react';

export default function Web() {
  const [simpleMode, setSimpleMode] = React.useState(false);
  return (
    <main className={`
      app
      grid w-screen h-screen fixed bg-red-300
      ${simpleMode && 'simple'}
    `}>
      <nav className="bg-green-500 flex items-center justify-center">
        <button className='p-2 text-green-900 font-semibold tracking-tight border-2 border-green-300 rounded' onClick={() => setSimpleMode(!simpleMode)}>Toggle</button>
      </nav>
      <header className='bg-orange-100'>ORANGE</header>
      <aside className='sidebar bg-black'>WHITE</aside>
      <article className='bg-purple-700 overflow-y-scroll'>
        <div className='min-h-[2000px]'>Main Content</div>
      </article>
    </main>
  );
}
