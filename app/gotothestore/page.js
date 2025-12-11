import Image from 'next/image'
import './styles.css'

export default function GoToTheStore() {
  return (
    <div className="voucher-container">
      <div className="voucher-content">
        <Image
          src="/voucher.png"
          alt="Voucher"
          width={800}
          height={600}
          priority
          className="voucher-image"
        />
      </div>
    </div>
  )
}