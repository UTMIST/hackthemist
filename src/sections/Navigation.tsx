/**
 * From https://chakra-templates.dev/navigation/navbar
 */

import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import {useEffect, useState} from "react";

const Navbar = () => {
    const {isOpen, onToggle} = useDisclosure();
    const [navbarDocked, setNavbarDocked] = useState(true);

    const onScroll = () => {
        // Make navbar transparent when it's at the top.
        setNavbarDocked(window.scrollY < 10);
    };

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navbarTransparent = navbarDocked && !isOpen;

    const backgroundColor = navbarTransparent
        ? 'rgba(0, 0, 0, 0)'
        : 'white'

    const borderColor = navbarTransparent
        ? 'rgba(0, 0, 0, 0)'
        : 'gray.400';

    const textColor = navbarTransparent
        ? 'rgba(255, 255, 255, 255)'
        : 'gray.600';

    return (
        <Box style={{position: 'fixed', width: '100%', zIndex: 1000}}>
            <Flex
                bg={backgroundColor}
                color={textColor}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={borderColor}
                style={{transitionDuration: '0.5s'}}
                align={'center'}>
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{base: -2}}
                    display={{base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
                        }
                        variant={navbarTransparent ? 'outline' : 'ghost'}
                        style={navbarTransparent ? {background: 'rgba(0, 0, 0, 0)'} : {}}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}} display={{base: 'none', md: 'flex'}}>
                    <Link
                        href='#'
                        textAlign={useBreakpointValue({base: 'center', md: 'left'})}
                        fontFamily={'heading'}
                        color={textColor}>
                        Hack the MIST
                    </Link>

                    <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                        <DesktopNav navbarDocked={navbarTransparent}/>
                    </Flex>
                </Flex>

                {/*
                <Stack
                    flex={{base: 1, md: 0}}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        Sign In
                    </Button>
                    <Button
                        display={{base: 'none', md: 'inline-flex'}}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Sign Up
                    </Button>
                </Stack>*/}
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav toggleParent={onToggle}/>
            </Collapse>
        </Box>
    );
}

const DesktopNav = ({navbarDocked}: { navbarDocked: boolean }) => {
    const linkColor = navbarDocked
        ? 'white'
        : 'gray.600';
    const linkHoverColor = navbarDocked
        ? 'white'
        : 'gray.800';
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{bg: useColorModeValue('pink.50', 'gray.900')}}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{color: 'pink.400'}}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon}/>
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = ({toggleParent}: { toggleParent: any }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{md: 'none'}}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} navItem={navItem} toggleParent={toggleParent}/>
            ))}
        </Stack>
    );
};

const MobileNavItem = ({navItem, toggleParent}: { navItem: NavItem, toggleParent: any }) => {
    const {label, children, href} = navItem;
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
                onClick={toggleParent}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'About Us',
        href: '#about-us'
    },
    {
        label: 'Sponsors',
        href: '#sponsors'
    },
    {
        label: 'Contact Us',
        href: '#contact-us'
    },
    {
        label: 'FAQ',
        href: '#faq'
    }
];

export default Navbar;