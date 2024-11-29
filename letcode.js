function getConcatenation(nums) {
  // Panjang array nums
  const n = nums.length;
  // Membuat array baru dengan panjang 2n
  const ans = new Array(2 * n);

  // Mengisi array ans
  for (let i = 0; i < n; i++) {
    // Bagian ans[i] == nums[i]
    ans[i] = nums[i];
    // Bagian ans[i + n] == nums[i]
    ans[i + n] = nums[i];
  }

  return ans;
}

const nums = [1, 2, 1];
console.log(getConcatenation(nums));
