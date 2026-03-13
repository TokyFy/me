import Image from 'next/image'
import portfolio from './data/portfolio.json'

export default function Home() {
    const labelCellClass = "w-28 py-4 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold"

    return (
        <div className="py-12">
            <div>
                <div className='flex gap-2 w-1/2 flex-wrap'>
                    {portfolio.tags.map((tag) => (
                        <p key={tag} className='bg-neutral-200 w-fit text-sm px-1'>{tag}</p>
                    ))}
                </div>
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
                                <tr key={row.label}>
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
        </div>
    )
}
