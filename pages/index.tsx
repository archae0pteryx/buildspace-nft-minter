import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export default function Home() {
  const { connected } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Solana buildspace</title>
        <meta name='description' content='foobar' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>Connected: {connected ? <>✅</> : <>❌</>}</p>
      <main className={styles.main}>
        {!connected ? <Disconnected /> : <Connected />}
      </main>

      <footer className={styles.footer}>
        <p>Foo Footer</p>
      </footer>
    </div>
  )
}
import { MouseEventHandler, useCallback } from 'react'

const Disconnected = () => {
  const modalState = useWalletModal()
  const { wallet, connect } = useWallet()
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.defaultPrevented) {
        return
      }

      if (!wallet) {
        modalState.setVisible(true)
      } else {
        connect().catch(() => {})
      }
    },
    [wallet, connect, modalState]
  )
  return (
    <div>
      <h1>disconnected</h1>
      <div>
        <button onClick={handleClick}>connect</button>
      </div>
    </div>
  )
}

const Connected = () => {
  const handleMint = async () => {
    console.log('mint')
  }
  return (
    <div>
      <h1>Solana NFT Buildpace project</h1>
      <div>
        <p></p>
        <p>
          The chakra styling described in the lessons has conflicts with the
          solana wallet libraries. I have excluded this and left the styling out as it is not at all important.
        </p>
        <div>
          <Image
            width={100}
            height={100}
            src='https://www.fillmurray.com/100/100'
            alt=''
          />
          <Image
            width={100}
            height={100}
            src='https://www.fillmurray.com/100/100'
            alt=''
          />
          <Image
            width={100}
            height={100}
            src='https://www.fillmurray.com/100/100'
            alt=''
          />
          <Image
            width={100}
            height={100}
            src='https://www.fillmurray.com/100/100'
            alt=''
          />
          <Image
            width={100}
            height={100}
            src='https://www.fillmurray.com/100/100'
            alt=''
          />
        </div>
        <button onClick={handleMint}>Mint</button>
      </div>
    </div>
  )
}
