import React from 'react';

const data = [
  {
    title: 'Complete Plant Inspection',
    image: 'https://img.freepik.com/premium-photo/highprecision-metal-component-circular-base-with-central-protrusion-holes-around-perimeter-industrial-machinery-part_985997-9190.jpg?w=740',
    description: 'This is a high-precision metal component with a circular base and a central protrusion. It is designed with holes around the perimeter, making it an essential part of industrial machinery. The component is crafted with meticulous attention to detail, ensuring durability and performance. It is ideal for applications requiring precise mechanical operations. The robust construction and superior finish make it a reliable choice for engineers and manufacturers. With its intricate design and high functionality, this metal component stands out as a critical element in the assembly of various industrial machines.'
  },
  {
    title: 'Structural Fabrication',
    image: 'https://img.freepik.com/premium-photo/highprecision-metal-component-circular-base-with-central-protrusion-holes-around-perimeter-industrial-machinery-part_985997-9190.jpg?w=740',
    description: 'This is a high-precision metal component with a circular base and a central protrusion. It is designed with holes around the perimeter, making it an essential part of industrial machinery. The component is crafted with meticulous attention to detail, ensuring durability and performance. It is ideal for applications requiring precise mechanical operations. The robust construction and superior finish make it a reliable choice for engineers and manufacturers. With its intricate design and high functionality, this metal component stands out as a critical element in the assembly of various industrial machines.'
  },
  {
    title: 'Non Destruction Test of Mechanical/Civil Structure',
    image: 'https://img.freepik.com/premium-photo/highprecision-metal-component-circular-base-with-central-protrusion-holes-around-perimeter-industrial-machinery-part_985997-9190.jpg?w=740',
    description: 'This is a high-precision metal component with a circular base and a central protrusion. It is designed with holes around the perimeter, making it an essential part of industrial machinery. The component is crafted with meticulous attention to detail, ensuring durability and performance. It is ideal for applications requiring precise mechanical operations. The robust construction and superior finish make it a reliable choice for engineers and manufacturers. With its intricate design and high functionality, this metal component stands out as a critical element in the assembly of various industrial machines.'
  },
  {
    title: 'Design',
    image: 'https://img.freepik.com/premium-photo/highprecision-metal-component-circular-base-with-central-protrusion-holes-around-perimeter-industrial-machinery-part_985997-9190.jpg?w=740',
    description: 'This is a high-precision metal component with a circular base and a central protrusion. It is designed with holes around the perimeter, making it an essential part of industrial machinery. The component is crafted with meticulous attention to detail, ensuring durability and performance. It is ideal for applications requiring precise mechanical operations. The robust construction and superior finish make it a reliable choice for engineers and manufacturers. With its intricate design and high functionality, this metal component stands out as a critical element in the assembly of various industrial machines.'
  },
  {
    title: 'NDTMFL of steel wire rope',
    image: 'https://img.freepik.com/premium-photo/highprecision-metal-component-circular-base-with-central-protrusion-holes-around-perimeter-industrial-machinery-part_985997-9190.jpg?w=740',
    description: 'This is a high-precision metal component with a circular base and a central protrusion. It is designed with holes around the perimeter, making it an essential part of industrial machinery. The component is crafted with meticulous attention to detail, ensuring durability and performance. It is ideal for applications requiring precise mechanical operations. The robust construction and superior finish make it a reliable choice for engineers and manufacturers. With its intricate design and high functionality, this metal component stands out as a critical element in the assembly of various industrial machines.'
  },
  {
    title: 'Inspection & Material Testing',
    image: 'https://img.freepik.com/premium-photo/highprecision-metal-component-circular-base-with-central-protrusion-holes-around-perimeter-industrial-machinery-part_985997-9190.jpg?w=740',
    description: 'This is a high-precision metal component with a circular base and a central protrusion. It is designed with holes around the perimeter, making it an essential part of industrial machinery. The component is crafted with meticulous attention to detail, ensuring durability and performance. It is ideal for applications requiring precise mechanical operations. The robust construction and superior finish make it a reliable choice for engineers and manufacturers. With its intricate design and high functionality, this metal component stands out as a critical element in the assembly of various industrial machines.'
  },
  {
    title: 'Plant Upgradation and Medication',
    image: 'https://img.freepik.com/premium-photo/highprecision-metal-component-circular-base-with-central-protrusion-holes-around-perimeter-industrial-machinery-part_985997-9190.jpg?w=740',
    description: 'This is a high-precision metal component with a circular base and a central protrusion. It is designed with holes around the perimeter, making it an essential part of industrial machinery. The component is crafted with meticulous attention to detail, ensuring durability and performance. It is ideal for applications requiring precise mechanical operations. The robust construction and superior finish make it a reliable choice for engineers and manufacturers. With its intricate design and high functionality, this metal component stands out as a critical element in the assembly of various industrial machines.'
  },
];

function Service() {
  return (
    <div>
      <section className='w-full px-4'>
        <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>
          {data.map((item, index) => {
            return (
              <div key={index} className='flex flex-col md:flex-row justify-center gap-4 border-2 shadow-sm shadow-gray-600 p-5 rounded-md'>
                <div className='w-full md:w-1/2'>
                  <img className='w-full h-full rounded-md' src={item.image} alt=''/>
                </div>
                <div className='p-3 w-full md:w-1/2 rounded-md'>
                  <h3 className='text-2xl text-center font-serif font-semibold py-3'>{item.title}</h3>
                  <p className='text-justify text-md font-semibold'>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Service;
