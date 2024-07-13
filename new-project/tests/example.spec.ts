import { test, expect } from '@playwright/test';
import * as path from 'path';

test('Upload folder', async ({ page }) => {
  let html = path.join(__dirname, 'upload_template.html')  
  await page.goto(`file://${html}`);
  let local_path = path.join(__dirname, 'folder');
  console.log(local_path);
  await page.locator('input[type=file]').setInputFiles('/Users/sashas/Documents/bug_repo/new-project/tests/folder');
  console.log('Uploaded')
});

test('Upload file', async ({ page }) => {
  let html = path.join(__dirname, 'upload_template.html')  
  await page.goto(`file://${html}`);
  let local_path = path.join(__dirname, 'folder/first_file.json');
  console.log(local_path);
  await page.locator('input[type=file]').setInputFiles('/Users/sashas/Documents/bug_repo/new-project/tests/folder/first_file.json');
  console.log('Uploaded')
});