import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.puppyswap.finance'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.puppyswap.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.puppyswap.finance/pools'
  },
  {
    label: 'Oceans',
    icon: 'WaveIcon',
    href: 'https://www.puppyswap.finance/oceans',
  },
  {
    label: 'Lottery 🆕',
    icon: 'TicketIcon',
    href: 'https://www.puppyswap.finance/lottery',
  },
  {
    label: 'Launchpad (IDOs)',
    icon: 'IfoIcon',
    href: 'https://www.puppyswap.finance/ido',
  },
  {
    label: 'Audit By Certik in progress...',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Price Graph',
    icon: 'GraphIcon',
    href: 'https://www.puppyswap.finance/graph',
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/puppyswap-finance',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/puppyswap',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/puppyswap',
      },
    ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.puppyswap.finance/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PuppySwap',
  //       href: 'https://puppyswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.puppyswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/puppyswap/",
        icon: 'GithubIcon'
      },
      {
        label: "Docs",
        href: "https://puppyswap.gitbook.io/puppy-swap",
        icon: 'GitbookIcon'
      },
      {
        label: "Blog",
        href: "https://puppyswap.medium.com",
        icon: 'MediumIcon'
      },
    ],
  },
]

export default config
