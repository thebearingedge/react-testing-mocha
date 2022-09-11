import chai from 'chai'
import chaiDOM from 'chai-dom'
import { cleanup } from '@testing-library/react'

chai.use(chaiDOM)

afterEach(() => cleanup())

export const { expect } = chai
