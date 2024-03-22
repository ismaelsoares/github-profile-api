import logo from '../assets/react.svg'
export const Header = () => {
    return (
        <header>
            <img
                className='h-[40vmin] pointer-events-none'
                src={logo}
                alt="logo"
            />
            <p>Edit <code>src/App.tsx </code>
                and save to reload</p>
        </header>
    )
}