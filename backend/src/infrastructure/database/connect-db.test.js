import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { connectDB } from './connect-db.js'
import { connect } from 'mongoose'

vi.mock('mongoose', () => ({ connect: vi.fn() }))

describe('connectDB', () => {
    let consoleSpy

    beforeEach(() => {
        consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => { })
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('logs success when DB connects', async () => {
        connect.mockResolvedValueOnce(true)
        await connectDB()
        expect(connect).toHaveBeenCalledWith(process.env.DATABASE_URL)
        expect(consoleSpy).toHaveBeenCalledWith("Database connection success.")
    })

    it('logs failure when DB fails', async () => {
        connect.mockRejectedValueOnce(new Error('Failed'))
        await connectDB()
        expect(connect).toHaveBeenCalledWith(process.env.DATABASE_URL)
        expect(consoleSpy).toHaveBeenCalledWith("DB connection failed!")
    })
})
