import Image from 'next/image'
import portfolio from '../data/portfolio.json'

export default function Index() {
    const labelCellClass = "w-40 py-4 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold uppercase"

    return <div>
                <div className='py-11 flex justify-center'>
                    <Image
                        src={portfolio.avatar.src}
                        width={portfolio.avatar.width}
                        height={portfolio.avatar.height}
                        alt={portfolio.avatar.alt}
                    />
                </div>
                <table>
                    <tbody className="divide-y align-top">
                        {portfolio.rows.map((row) => {
                            const isMultiLineLabel = row.label.includes('\n')

                            return (
                                <tr key={row.label} id={row.label.toLowerCase().replace(/\s+/g, '-').replace(/\n+/g, '-')}>
                                    <td className={`${labelCellClass} ${isMultiLineLabel ? 'after:top-4' : ''}`}>
                                        {row.label.split('\n').map((labelPart, index) => (
                                            <span key={`${row.label}-${labelPart}`}>
                                                {index > 0 && <br />}
                                                {labelPart}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="py-4">{row.value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    
}  
