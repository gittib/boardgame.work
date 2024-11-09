class MyMutex {
    constructor() {
    }

    #isLocking = false;

    mySleep(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }

    async lock(timeout = 60000) {
        const timeLimit = Date.now() + timeout;
        while (Date.now() < timeLimit) {
            let sleep = this.mySleep(33);
            if (!isLocking) {
                isLocking = true;
                return true;
            }
            await sleep();
        }
        return false;
    }

    unlock() {
        isLocking = false;
    }

    async withLock(callback, timeout = 60000) {
        let result = await this.lock(timeout);
        if (!result) {
            throw new Error('lock失敗');
        }

        try {
            await callback();
        } finally {
            this.unlock();
        }
    }
}
