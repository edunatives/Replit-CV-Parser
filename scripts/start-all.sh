#!/bin/bash
# Start both NestJS and Next.js servers

# Start NestJS backend in background
(cd nest && npx tsx --tsconfig tsconfig.json start.ts) &
NEST_PID=$!

# Wait for NestJS to be ready
sleep 5

# Start Next.js frontend
NODE_ENV=development tsx server/index.ts

# Cleanup NestJS when Next.js exits
kill $NEST_PID 2>/dev/null
