import { test, expect } from '@playwright/test';
import * as path from 'path';

test('Upload folder', async ({ page }) => {
  let html = path.join(__dirname, 'upload_template.html')  
  await page.goto(`file://${html}`);
  let local_path = path.join(__dirname, 'folder');
  console.log(local_path);
  await page.locator('input[type=file]').setInputFiles(local_path);
  console.log('Uploaded')
});

test('Upload file', async ({ page }) => {
  let html = path.join(__dirname, 'upload_template.html')  
  await page.goto(`file://${html}`);
  let local_path = path.join(__dirname, 'test_f');
  local_path = process.cwd() + '/tests/test_f'
  console.log(local_path);
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator('input[type=file]').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(local_path);
  console.log('Uploaded')
});