import Link from 'next/link'

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {}

const links = [
  { name: 'Product', href: '#', target: '_self' },
  { name: 'Pricing', href: '/pricing', target: '_self' },
  { name: 'Company', href: '#', target: '_self' },
  { name: 'Blog', href: '/blog', target: '_self' },
  { name: 'Contact', href: '/contacts', target: '_self' },
]

const Header = (props: HeaderProps ) => {

  return (
    <header
      {...props}
      className='h-[80px] container flex items-center mx-auto max-w-[1140px]'>
        <Link href={'/'} className=' text-[25px] font-black leading-[28px]'>
          Rooby
        </Link>
        <nav className='ml-[100px] lg:block hidden'>
          <ul className='flex items-center space-x-[47px]'>
            {links?.map ((element, index, array)=>(
               <li key={index}>
                
                <Link href={element.href} target={element.target}>
                {element.name}
                </Link>
               </li>
            ))}
          </ul>
        </nav>
        <div className='lg:flex hidden items-center ml-auto space-x-[20px] text-[12px]'>
          <button className='h-[32px] px-[20px] flex items-center bg-white border border-[#DCDCDC] text-black rounded-[5px] font-bold'>Log in</button>
          <button className='h-[32px] px-[20px] flex items-center bg-[#150050] text-white border border-[#DCDCDC] rounded-[5px] font-bold'>Try for free</button>
        </div>

    </header>

    
  )
}

export default Header