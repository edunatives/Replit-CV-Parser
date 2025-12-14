#!/bin/bash
# Start both NestJS and Next.js servers

# Start NestJS backend in background
echo "Starting NestJS backend on port 3001..."
npx tsx --tsconfig nest/tsconfig.json nest/start.ts &
NEST_PID=$!

# Wait for NestJS to be ready
sleep 5

# Start Next.js frontend
echo "Starting Next.js frontend on port 5000..."
NODE_ENV=development tsx server/index.ts

# Cleanup NestJS when Next.js exits
kill $NEST_PID 2>/dev/null
