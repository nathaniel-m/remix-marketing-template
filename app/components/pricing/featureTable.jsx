import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

export default function FeatureTable({ featureData }) {
    return (
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="hidden lg:block">
                <table className="w-full h-px">
                    <thead className="sticky top-0 inset-x-0">
                        <tr>
                            <th className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start" scope="col">
                                <span className="sr-only"></span>
                                <span className=""></span>
                            </th>
                            {featureData.plans.map((plan) => (
                                <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">{plan}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        {featureData.sections.map((sections) => (
                            <>
                                <tr>
                                    <th className="py-3 ps-6 bg-50 font-bold text-gray-800 text-start dark:bg-gray-800 dark:text-white" colSpan="5" scope="colgroup">{sections.name}</th>
                                </tr>
                                {sections.features.map((feature) => (
                                    <tr>
                                        <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-200" scope="row"> {feature.name}</th>
                                        <td className="py-5 px-6 justify-center">
                                            {feature.Beginner ? <CheckIcon aria-hidden="true" className='text-600 dark:text-500 h-6 w-5 flex mx-auto' /> : <MinusIcon aria-hidden="false" className='text-black dark:text-white h-6 w-5 flex mx-auto' />}
                                        </td>
                                        <td className="py-5 px-6">
                                            {feature.Pro ? <CheckIcon aria-hidden="true" className='text-600 dark:text-500 h-6 w-5 flex mx-auto' /> : <MinusIcon aria-hidden="false" className='text-black dark:text-white h-6 w-5 flex mx-auto' />}
                                        </td>
                                        <td className="py-5 px-6">
                                            {feature.Expert ? <CheckIcon aria-hidden="true" className='text-600 dark:text-500 h-6 w-5 flex mx-auto' /> : <MinusIcon aria-hidden="false" className='text-black dark:text-white h-6 w-5 flex mx-auto' />}
                                        </td>
                                        <td className="py-5 px-6">
                                            {feature.Supreme ? <CheckIcon aria-hidden="true" className='text-600 dark:text-500 h-6 w-5 flex mx-auto' /> : <MinusIcon aria-hidden="false" className='text-black dark:text-white h-6 w-5 flex mx-auto' />}
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}