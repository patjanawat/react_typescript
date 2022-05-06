import React from 'react'
type RandomNumberType = {
    value :number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isPositive?: never
    isNegative: boolean
    isZero?: never    
}

type Zero = RandomNumberType & {
    isPositive?: never
    isNegative?: never
    isZero: boolean
}
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero
    
export const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'is positive'} {isNegative && 'is negative'} {isZero && 'is zero'} {''}
        </div>
    )
}