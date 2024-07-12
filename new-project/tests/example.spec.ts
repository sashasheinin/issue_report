import { test, expect } from '@playwright/test';
import * as path from 'path';

test('has title', async ({ page }) => {
  let html = path.join(__dirname, 'upload_template.html')  
  await page.goto(`file://${html}`);
  await page.locator('input[type=file]').setInputFiles(path.join(__dirname, 'folder'));
  console.log('Uploaded')
});