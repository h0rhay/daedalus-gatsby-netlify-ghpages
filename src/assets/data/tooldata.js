//images
import PackageIcon from '../images/icon-package.svg'
import NetworkIcon from '../images/icon-network.svg'
import HermesIcon from '../images/icon-hermes.svg'
import SecureIcon from '../images/icon-secure.svg'

const toolsData = {
  toolsInfo: [
    {
      status: 'Completed',
      category: 'c',
      title: 'Cardano package',
      desc: 'The Cardano library. This includes full support for the Cardano blockchain and wallets. It also provides helpers to maintain HDWallets and includes a flexible transaction build engine.',
      icon: PackageIcon,
      link: "https://github.com/input-output-hk/rust-cardano"
    },
    {
      status: 'Completed',
      category: 'c',
      title: 'Cardano C package',
      desc: 'Exports a simple API to use in a C library. It can also be used to write bindings.',
      icon: PackageIcon,
      link: "https://github.com/input-output-hk/rust-cardano/tree/master/cardano-c"
    },
    {
      status: 'Completed',
      category: 'c',
      title: 'Cardano CLI',
      desc: `The Cardano command-line interface provides the following features and functions:
• powerful blockchain manager
• flexible transaction build engine
• download, explore, verify, and analyze functions
• can manage multiple wallets: Daedalus, Icarus and custom wallets`,
      icon: PackageIcon,
      link: "https://github.com/input-output-hk/cardano-cli"
    },
    {
      status: 'Completed',
      category: 'c',
      title: 'Hermes package',
      desc: 'Bridge between the Cardano low level network and HTTP layer. Provides an extremely fast blockchain synchronization.',
      icon: HermesIcon,
      link: "https://github.com/input-output-hk/rust-cardano/tree/master/hermes"
    },
    {
      status: 'Completed',
      category: 'c',
      title: 'Cardano network',
      desc: 'The Cardano network protocol. Provides an implementation to fetch blocks from a remote node and send transactions to a remote node.',
      icon: NetworkIcon,
      link: "https://github.com/input-output-hk/rust-cardano/tree/master/protocol"
    },
    {
      status: 'Completed',
      category: 'c',
      title: 'Cardano storage',
      desc: 'The Cardano storage library. Provides two different levels of functionality; from a low level fast immutable, or append-only file capability (without any data assumptions), to a higher level that is intertwined with the Cardano blockchain itself.',
      icon: SecureIcon,
      link: "https://github.com/input-output-hk/rust-cardano/tree/master/storage"
    },
    {
      status: 'Coming Soon',
      category: 'cs',
      title: 'Wallet backend API package',
      desc: null,
      icon: PackageIcon
    },
    {
      status: 'Coming Soon',
      category: 'cs',
      title: 'Cardano full node app',
      desc: null,
      icon: PackageIcon
    },
    {
      status: 'Future Goals',
      category: 'fg',
      title: 'Cardano consensus protocol package',
      desc: null,
      icon: PackageIcon
    },
    {
      status: 'Future Goals',
      category: 'fg',
      title: 'Cardano staking, delegation',
      desc: null,
      icon: PackageIcon
    },
    {
      status: 'Future Goals',
      category: 'fg',
      title: 'Cardano voting package',
      desc: null,
      icon: PackageIcon
    }
  ]
}

export default toolsData