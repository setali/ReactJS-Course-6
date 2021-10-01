import Main from '../layout/Main'

export default function About () {
  const color = 'red'

  return (
    <Main>
      <h2 className='header'>About us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <style global jsx>{`
        h2 {
          color: ${color};
        }
        .header {
          background-color: green;
        }
        p {
          color: aqua;
          padding: 10px;
        }
      `}</style>
    </Main>
  )
}
