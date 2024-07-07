import { test, expect } from '@playwright/test';
let url : string = "https://cib.go.th/";


test('TC_HOME_01_01', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('button', { name: 'อ่านเพิ่มเติม' }).click();
  await expect(page.getByRole('heading', { name: 'ประวัติ' }).locator('span')).toBeVisible();
});

test('TC_HOME_01_02', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('button', { name: 'อ่านเพิ่มเติม' }).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();
});

test('TC_HOME_01_03', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('กองบังคับการตำรวจทางหลวง', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'กองบังคับการตำรวจทางหลวง' }).locator('span')).toBeVisible();
});

test('TC_HOME_01_04', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('กองบังคับการตำรวจทางหลวง', { exact: true }).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();
});

test('TC_HOME_01_05', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.locator('span').filter({ hasText: 'อ่านทั้งหมด' }).click();
  await expect(page.getByRole('heading', { name: 'หน่วยงานในสังกัด' }).locator('span')).toBeVisible();
});

test('TC_HOME_01_06', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.locator('span').filter({ hasText: 'อ่านทั้งหมด' }).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();
});

test('TC_HOME_01_07', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.locator('div:nth-child(3) > .cookies-privacy > .cookies-privacy-block > .bg-black > .text-family-iconic-regular').first().click();
  await page.locator('div:nth-child(3) > .cookies-privacy > div:nth-child(2) > .absolute > .flex > p').first().click();
  await expect(page.locator('#modalVideo').getByRole('button')).toBeVisible(); 
});
  
test('TC_HOME_01_08', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.locator('div:nth-child(3) > .cookies-privacy > .cookies-privacy-block > .bg-black > .text-family-iconic-regular').first().click();
  await page.locator('div:nth-child(3) > .cookies-privacy > div:nth-child(2) > .absolute > .flex > p').first().click();
  await page.locator('#modalVideo').getByRole('button').click();
  await expect(page.getByRole('link', { name: 'หน้าหลัก' })).toBeVisible();
});

test('TC_HOME_01_09', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('link', { name: 'ผลการปฎิบัติงาน | 6 ก.ค. 2567 ตำรวจสอบสวนกลาง (CIB) เปิดปฏิบัติการ STOP' }).click();
  await expect(page.getByRole('link', { name: 'ตำรวจสอบสวนกลาง (CIB) เปิดปฏิบัติการ STOP POLLUTION THE SERIES ขยะเถื่อนบุกเมือง' })).toBeVisible();  
});

test('TC_HOME_01_10', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('link', { name: 'ผลการปฎิบัติงาน | 6 ก.ค. 2567 ตำรวจสอบสวนกลาง (CIB) เปิดปฏิบัติการ STOP' }).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible(); 
});

test('TC_HOME_01_11', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('อ่านทั้งหมด').nth(2).click();
  await expect(page.getByLabel('Sidebar').getByText('ผลการปฎิบัติงาน')).toBeVisible(); 
});

test('TC_HOME_01_12', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('อ่านทั้งหมด').nth(2).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();
});
 
test('TC_HOME_01_13', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.locator('.bg-white > .cookies-privacy > .cookies-privacy-block').click();
  await page.getByRole('button', { name: 'Twitter' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#box-socials-0').click();
  const page1 = await page1Promise;
  await expect(page1.getByTestId('tweet')).toBeVisible();
});

test('TC_HOME_01_14', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('link', { name: 'Avatar ความรู้เตือนภัย 5' }).click();
  await expect(page.getByRole('link', { name: 'เตือนภัย! กดลิงก์รับสิทธิเงินดิจิทัล มิจแท้ 100%' })).toBeVisible();
});

test('TC_HOME_01_15', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('link', { name: 'Avatar ความรู้เตือนภัย 5' }).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();
});

test('TC_HOME_01_16', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('อ่านทั้งหมด').nth(3).click();
  await expect(page.getByLabel('Sidebar').getByText('ความรู้เตือนภัย')).toBeVisible();
});

test('TC_HOME_01_17', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('อ่านทั้งหมด').nth(3).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();

});

test('TC_HOME_01_18', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('link', { name: 'กิจกรรม | 1 ก.ค. 2567 ตำรวจน้ำสอนน้องว่ายน้ำ สำหรับน้องผู้มีความบกพร่องทางการพูดและการได้ยิน โรงเรียนโสตศึกษาเทพรัตน จ.ประจวบคีรีขันธ์', exact: true }).click();
  await expect(page.getByRole('link', { name: 'ตำรวจน้ำสอนน้องว่ายน้ำ สำหรับน้องผู้มีความบกพร่องทางการพูดและการได้ยิน โรงเรียนโ' })).toBeVisible();
});

test('TC_HOME_01_19', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByRole('link', { name: 'กิจกรรม | 2 ก.ค. 2567' }).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();
});

test('TC_HOME_01_20', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('อ่านทั้งหมด').nth(4).click();
  await expect(page.getByLabel('Sidebar').getByText('กิจกรรม')).toBeVisible();
});

test('TC_HOME_01_21', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'ปิด', exact: true }).click();
  await page.getByText('อ่านทั้งหมด').nth(4).click();
  await page.getByRole('button', { name: 'กลับ' }).click();
  await expect(page.locator('#popupHome')).toBeVisible();
});
