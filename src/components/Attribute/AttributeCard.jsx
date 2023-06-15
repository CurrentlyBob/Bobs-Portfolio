import Image from 'next/image'

const AttributeCard = ({ imageSrc, altText, title, description, specializations }) => (
  <div className="text-center shadow-lg p-10 rounded-xl my-10 w-[600px] bg-yellow-50 dark:bg-gray-800">
    <div className="flex justify-center">
      <Image src={imageSrc} alt={altText} width={100} height={100} />
    </div>
    <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100 text-orange-500">{title}</h3>
    <p className="py-2 dark: text-gray-400">{description}</p>
    <h4 className="py-4 dark:text-gray-100 text-orange-600">Specializations</h4>
    {specializations.map((specialization, index) => (
      <p className="py-1 dark:text-gray-300 text-amber-950" key={index}>
        {specialization}
      </p>
    ))}
  </div>
)

export default AttributeCard
