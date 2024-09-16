//Utilizado para poder configurar o estilo do css
//https://www.npmjs.com/package/tailwind-merge
import { twMerge } from 'tailwind-merge';

export function ContainerGrid({children, className}) {
    //Classes Padrões
    const defaultClass = 'w-full max-w-grid mx-auto px-28'
    //Classes Combinadas
    const combinedClasses = twMerge(defaultClass, className)

    return(
        <div className={combinedClasses}>
            {children}
        </div>
    )
}