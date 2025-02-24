"use client"
interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    BackButtonLabel : string
    BackButtonHref: string
    ShowSocial? : boolean
}

export function CardWrapper ({children, headerLabel, BackButtonLabel, BackButtonHref, ShowSocial}: CardWrapperProps){
    return (
        <div className="flex flex-col gap-4">
           {children}
        </div>
    );
}